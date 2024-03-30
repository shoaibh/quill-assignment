const data = {
  id: "1",
  name: "root",
  isFolder: true,
  path: "/root",
  fileContentPath: "",
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      path: "/root/public",
      fileContentPath: "",
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          path: "/root/public/public nested 1",
          fileContentPath: "",
          items: [
            {
              id: "4",
              name: "example 1",
              isFolder: false,
              items: [],
              path: "/root/public/public nested 1/index.html",
              fileContentPath: "/exampleFile1.js",
            },
            {
              id: "5",
              name: "example 2",
              path: "/root/public/public nested 1/hello.html",
              isFolder: false,
              fileContentPath: "/exampleFile2.js",
              items: [],
            },
          ],
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false,
          path: "/root/public/public_nested_file",
          fileContentPath: "/file.txt",
          items: [],
        },
      ],
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      fileContentPath: "",
      path: "/root/src",
      items: [
        {
          id: "8",
          name: "App.js",
          isFolder: false,
          path: "/root/src/App.js",
          fileContentPath: "/file.txt",
          items: [],
        },
        {
          id: "9",
          name: "Index.js",
          isFolder: false,
          path: "/root/src/Index.js",
          fileContentPath: "/file.txt",
          items: [],
        },
        {
          id: "10",
          name: "styles.css",
          isFolder: false,
          path: "/root/src/styles.css",
          fileContentPath: "/file.txt",
          items: [],
        },
      ],
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      path: "/root/package.json",
      fileContentPath: "/file.txt",
      items: [],
    },
  ],
};

export default data;
