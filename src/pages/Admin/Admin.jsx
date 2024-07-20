import React, { useEffect, useState } from "react";
import _ from "lodash";
import toast, { Toaster } from "react-hot-toast";
import Cookies from "js-cookie";
import { getAllBuffers } from "../../services/buffer.service";
import { approveArticle } from "../../services/article.service";

export default function Admin() {
  const [buffers, setBuffers] = useState();
  useEffect(() => {
    async function getBuffers() {
      const response = await getAllBuffers(Cookies.get("token"));
      setBuffers(await response.json());
    }
    getBuffers();
  }, []);

  const approve = async (id) => {
    const response = await approveArticle({ id: id }, Cookies.get("token"));
    const responseJson = await response.json();
    if (response.status === 200) {
      toast.success(responseJson.msg, { duration: 1000 });
    } else {
      toast.error(responseJson.msg, { duration: 1000 });
    }
  };
  return (
    <div>
      <div>
        <link
          href="https://fonts.googleapis.com/css?family=Material+Icons|Material+Icons+Outlined|Material+Icons+Two+Tone|Material+Icons+Round|Material+Icons+Sharp"
          rel="stylesheet"
        />
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
          <div className="col-span-12">
            <div className="overflow-auto lg:overflow-visible ">
              <table className="table text-gray-400 border-separate space-y-6 text-sm">
                <thead className="bg-gray-200 text-gray-500">
                  <tr>
                    <th className="p-3">Username</th>
                    <th className="p-3 text-left">Category</th>
                    <th className="p-3 text-left">Status</th>
                    <th className="p-3 text-left">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {_.map(buffers, (buffer) => (
                    <tr className="bg-gray-200">
                      <td className="p-3">
                        <div className="flex align-items-center">
                          <img
                            className="rounded-full h-12 w-12  object-cover"
                            src={buffer.coverPicUrl}
                            alt="unsplash image"
                          />
                          <div className="ml-3 p-3">
                            <div className>{buffer.author}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-3">{buffer.category}</td>
                      <td className="p-3">
                        <span className="bg-green-400 text-gray-50 rounded-lg px-2">
                          Pending
                        </span>
                      </td>
                      <td className="p-3">
                        <a
                          href="#"
                          className="text-gray-400 hover:text-white  mr-2"
                        >
                          <i className="material-icons-outlined text-base">
                            visibility
                          </i>
                        </a>
                        <a
                          onClick={() => {
                            approve(buffer._id);
                          }}
                          className="text-gray-400 hover:text-green-500 mx-2"
                        >
                          <i className="material-icons-outlined text-base">
                            done
                          </i>
                        </a>
                        <a
                          href="#"
                          className="text-gray-400 hover:text-red-900 ml-2"
                        >
                          <i className="material-icons-round text-base">
                            close
                          </i>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n\t.table {\n\t\tborder-spacing: 0 15px;\n\t}\n\n\ti {\n\t\tfont-size: 1rem !important;\n\t}\n\n\t.table tr {\n\t\tborder-radius: 20px;\n\t}\n\n\ttr td:nth-child(n+5),\n\ttr th:nth-child(n+5) {\n\t\tborder-radius: 0 .625rem .625rem 0;\n\t}\n\n\ttr td:nth-child(1),\n\ttr th:nth-child(1) {\n\t\tborder-radius: .625rem 0 0 .625rem;\n\t}\n",
          }}
        />
      </div>
    </div>
  );
}
