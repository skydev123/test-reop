import { Container } from "@mui/material";
import { RootData } from "../Interfaces/interfaces";
import { data } from "../data/data";
import { useState } from "react";
import { Link } from "react-router-dom";

export const Directory = ({ items, size, name, type, path }: RootData) => {
  const [show, setShow] = useState(false);

  const handleToggle = () => {
    setShow(!show);
  };

  return (
    <>
      <tr>
        <td
          className={`text-center whitespace-nowrap  p-2  font-medium text-gray-900 cursor-pointer ${
            type === "folder" ? `cursor-pointer` : `cursor-default`
          }`}
          onClick={() => {
            type === "folder" ? handleToggle() : null;
          }}
        >
          {name}
        </td>
        <td className={`text-center whitespace-nowrap   p-2  text-gray-700`}>
          {size}
        </td>
        <td className=" text-center whitespace-nowrap   p-2  text-gray-700">
          {type}
        </td>
        <td
          onClick={() => {
            type === "folder" ? handleToggle() : null;
          }}
          className={` text-center whitespace-nowrap   p-2  text-gray-700 cursor-pointer ${
            type === "folder" ? `cursor-pointer` : ``
          } `}
        >
          {type === "folder" ? "📁" : "📄"}
        </td>
        <td className=" text-center whitespace-nowrap   p-2  text-gray-700">
          <Link to={`${path}`}>{path}</Link>
        </td>
      </tr>
      {show ? (
        <>
          {items?.map((item) => (
            <Directory
              name={item.name}
              size={item.size}
              type={item.type}
              items={item.items}
              key={Math.floor(Math.random() * 1000)}
              path={item.path}
            />
          ))}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

const FileBrowserView = () => {
  return (
    <>
      <Container maxWidth="xl">
        <div className="overflow-x-auto py-10">
          <table className="w-full divide-y-2 divide-gray-200 bg-white text-sm rounded-xl ">
            <thead className="">
              <tr>
                <th className="whitespace-nowrap  py-5  font-medium text-gray-900">
                  Name
                </th>
                <th className="whitespace-nowrap  py-5  font-medium text-gray-900">
                  File Size
                </th>
                <th className="whitespace-nowrap  py-5  font-medium text-gray-900">
                  Type
                </th>
                <th className="whitespace-nowrap  py-5  font-medium text-gray-900">
                  Icon
                </th>
                <th className="whitespace-nowrap   font-medium text-gray-900">
                  Path
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <Directory
                items={data.items}
                name={data.name}
                type={data.type}
                size={data.size}
                path={data.path}
              />
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export const FileBrowser = () => {
  return (
    <>
      <FileBrowserView />
    </>
  );
};
