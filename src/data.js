const data = {
  id: "1",
  name: "Example Folder",
  isFolder: true,
  path: "/example_folder",
  fileContentPath: "",
  depth: 1,
  items: [
    {
      id: "2",
      name: "Sample Folder",
      isFolder: true,
      path: "/example_folder/sample_folder",
      fileContentPath: "",
      depth: 2,
      items: [
        {
          id: "3",
          name: "Folder",
          isFolder: true,
          path: "/example_folder/sample_folder/folder",
          fileContentPath: "",
          depth: 3,
          items: [
            {
              id: "4",
              name: "example 1",
              isFolder: false,
              items: [],
              path: "/example_folder/sample_folder/folder/example 1",
              fileContentPath: "/exampleFile1.js",
              depth: 4,
            },
            {
              id: "5",
              name: "example 2",
              path: "/example_folder/sample_folder/folder/example 2",
              isFolder: false,
              fileContentPath: "/exampleFile2.js",
              items: [],
              depth: 4,
            },
          ],
        },
        {
          id: "6",
          name: "Example File 1",
          isFolder: false,
          path: "/example_folder/sample_folder/Example File 1",
          fileContentPath: "/file.txt",
          items: [],
          depth: 3,
        },
      ],
    },
    {
      id: "2432",
      name: "pubasdfsalic",
      isFolder: true,
      path: "/example_folder/publadfic",
      fileContentPath: "",
      depth: 2,
      items: [
        {
          id: "3243",
          name: "public nested34 1",
          isFolder: true,
          path: "/example_folder/publadfic/public ne34sted 1",
          fileContentPath: "",
          depth: 3,
          items: [
            {
              id: "4345",
              name: "example asdf1",
              isFolder: false,
              items: [],
              path: "/example_folder/publadfic/public ne34sted 1/index.html",
              fileContentPath: "/exampleFile1.js",
              depth: 4,
            },
            {
              id: "33545",
              name: "exampdfssde 2",
              path: "/example_folder/publadfic/public ne34sted 1/hello.html",
              isFolder: false,
              fileContentPath: "/exampleFile2.js",
              items: [],
              depth: 4,
            },
          ],
        },
        {
          id: "634",
          name: "public_nested_dfile",
          isFolder: false,
          path: "/example_folder/publadfic/public_nested_file",
          fileContentPath: "/file.txt",
          items: [],
          depth: 3,
        },
      ],
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      fileContentPath: "",
      path: "/example_folder/src",
      depth: 2,
      items: [
        {
          id: "8",
          name: "App.js",
          isFolder: false,
          path: "/example_folder/src/App.js",
          fileContentPath: "/file.txt",
          items: [],
          depth: 3,
        },
        {
          id: "9",
          name: "Index.js",
          isFolder: false,
          path: "/example_folder/src/Index.js",
          fileContentPath: "/file.txt",
          items: [],
          depth: 3,
        },
        {
          id: "10",
          name: "styles.css",
          isFolder: false,
          path: "/example_folder/src/styles.css",
          fileContentPath: "/file.txt",
          items: [],
          depth: 3,
        },
      ],
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      path: "/example_folder/package.json",
      fileContentPath: "/file.txt",
      items: [],
      depth: 2,
    },
  ],
};

export default data;
