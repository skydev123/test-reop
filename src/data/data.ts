import { RootData } from "../Interfaces/interfaces";

export const data: RootData = {
  name: "Root App",
  type: "folder",
  size: "2mb",
  path: "/",
  items: [
    {
      name: "gitIgnore",
      type: "file",
      size: "1kb",
      path: "gitIgnore",
    },
    {
      name: "index.html",
      type: "file",
      size: "20kb",
      path: "index.html",
    },
    {
      name: "package.json",
      type: "file",
      size: "1kb",
      path: "package.json",
    },
    {
      name: "package-lock.json",
      type: "file",
      size: "1kb",
      path: "package-lock.json",
    },
    {
      name: "src",
      type: "folder",
      size: "10kb",
      path: "src",
      items: [
        {
          name: "App.css",
          type: "file",
          size: "3kb",
          path: "src/file1",
        },
        {
          name: "App.tsx",
          type: "file",
          size: "2kb",
          path: "src/file2",
        },
        {
          name: "main.tsx",
          type: "file",
          size: "3kb",
          path: "src/file3",
        },
        {
          name: "MainFolder",
          type: "folder",
          size: "3kb",
          path: "src/MainFolder",
          items: [
            {
              name: "common",
              type: "folder",
              size: "1kb",
              path: "src/MainFolder/common",
              items: [
                {
                  name: "BreadCrumbs.tsx",
                  type: "file",
                  size: "1kb",
                  path: "src/MainFolder/common/BreadCrumbs",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
