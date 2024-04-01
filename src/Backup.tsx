// import { Fragment } from "react/jsx-runtime";
// import data from "./data/data.json";
// import { MainType, File } from "./Interfaces/interfaces";
// import { FC, useState } from "react";

// interface Props {
//   main: MainType;
//   file_one?: File;
//   file_two?: File;
//   // components: any ,
// }

// const InnerFolder: FC<Props> = ({ main, file_one, file_two }) => {
//   console.log(main.children, "");

//   const [show, setShow] = useState(false);

//   const MainFolder = () => {
//     const folderType = data.app.children.flatMap((x) =>
//       Object.values(x).filter((y) => y.type === "folder")
//     );
//     console.log(folderType , 'folderType')


//     const [openMainFolder, setOpenMaiFolder] = useState(false);
//     return (
//       <>
//         {folderType.slice(0, 1).map((info, _index) => (
//           <Fragment key={_index}>
//             <p onClick={() => setOpenMaiFolder((prev) => !prev)}>{info.name}</p>
//             {openMainFolder ? (
//               <>
//                 <InnerFolder
//                   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//                   // @ts-ignore
//                   main={info}
//                 />
//               </>
//             ) : (
//               <></>
//             )}
//           </Fragment>
//         ))}
//       </>
//     );
//   };

//   return (
//     <>
//       <div onClick={() => setShow((prev) => !prev)}>
//         <p>{data.app.type}</p>
//       </div>
//       {show ? (
//         <>
//           <p>{file_one ? file_one.name : ""}</p>
//           <p>{file_two ? file_two.name : ""}</p>
//           <MainFolder />
//           {/* {data.app.name === "app"  ? (
//             <>
//               <p>{file_one ? file_one.name : ""}</p>
//               <p>{file_two ? file_two.name : ""}</p>
//               <MainFolder />
//             </>
//           ) : (
//             <></>
//           )} */}
//         </>
//       ) : (
//         <></>
//       )}
//     </>
//   );
// };

// const Folder = () => {
//   return (
//     <>
//       {data.app.children.map((x, _index) => (
//         <Fragment key={_index}>
//           <InnerFolder
//             // eslint-disable-next-line @typescript-eslint/ban-ts-comment
//             // @ts-ignore
//             main={x.main}
//             // components={x.components}
//             file_one={x.file1}
//             file_two={x.file2}
//           />
//         </Fragment>
//       ))}
//     </>
//   );
// };

// export const App = () => {
//   return (
//     <>
//       <Folder />
//     </>
//   );
// };




// // // import { FC } from "react";
// // // import { File } from "./Interfaces/interfaces";

// // // interface ArrayItem extends File {
// // //   innerArray?: Array<ArrayItem>;
// // // }

// // // const arr: { app: ArrayItem } = {
// // //   app: {
// // //     name: "app",
// // //     type: "folder",
// // //     size: "108mb",
// // //     innerArray: [
// // //       {
// // //         name: "file 1",
// // //         type: "file",
// // //         size: "102mb",
// // //       },
// // //       {
// // //         name: "file 2",
// // //         type: "file",
// // //         size: "107mb",
// // //       },
// // //       {
// // //         name: "main",
// // //         type: "file",
// // //         size: "102mb",
// // //         innerArray: [
// // //           {
// // //             name: "main",
// // //             type: "folder",
// // //             size: "111 mb",
// // //           },
// // //         ],
// // //       },
// // //     ],
// // //   },
// // // };

// // // export const CommonComponent: FC<ArrayItem> = ({
// // //   name,
// // //   size,
// // //   type,
// // //   innerArray,
// // // }) => {
// // //   return (
// // //     <>
// // //       <p>{name}</p>
// // //       <p>{size}</p>
// // //       <p>{type}</p>
// // //       {innerArray?.map((item, index) => (
// // //         <CommonComponent key={index} {...item} />
// // //       ))}
// // //     </>
// // //   );
// // // };

// // // export const App = () => {
// // //   return <CommonComponent {...arr.app} />;
// // // };



// // import * as React from "react";
// // import {
// //   BrowserRouter as Router,
// //   Link,
// //   Route,
// //   useParams,
// //   Routes,
// //   Outlet
// // } from "react-router-dom";
// // import { getTopic, getResource, getTopics } from "./api";

// // function Home() {
// //   return (
// //     <React.Fragment>
// //       <h1>Home</h1>
// //       <p>
// //         Welcome to our content index. Head over to{" "}
// //         <Link to="/topics">/topics</Link> to see our catalog.
// //       </p>
// //     </React.Fragment>
// //   );
// // }

// // function Resource() {
// //   const { topicId, resourceId } = useParams();

// //   const { name, description, id } = getResource({ topicId, resourceId });

// //   return (
// //     <div>
// //       <h3>{name}</h3>
// //       <p>{description}</p>
// //       <a href={`https://ui.dev/${id}`}>Read Post</a>
// //     </div>
// //   );
// // }

// // function Topic() {
// //   const { topicId } = useParams();
// //   const topic = getTopic(topicId);

// //   return (
// //     <div>
// //       <h2>{topic.name}</h2>
// //       <p>{topic.description}</p>

// //       <ul>
// //         {topic.resources.map((sub) => (
// //           <li key={sub.id}>
// //             <Link to={sub.id}>{sub.name}</Link>
// //           </li>
// //         ))}
// //       </ul>

// //       <hr />

// //       <Outlet />
// //     </div>
// //   );
// // }

// // function Topics() {
// //   const topics = getTopics();

// //   return (
// //     <div>
// //       <h1>Topics</h1>
// //       <ul>
// //         {topics.map(({ name, id }) => (
// //           <li key={id}>
// //             <Link to={id}>{name}</Link>
// //           </li>
// //         ))}
// //       </ul>

// //       <hr />

// //       <Outlet />
// //     </div>
// //   );
// // }


// // export const  App = () => {
// //   return (
// //     <Router>
// //       <div>
// //         <ul>
// //           <li>
// //             <Link to="/">Home</Link>
// //           </li>
// //           <li>
// //             <Link to="/topics">Topics</Link>
// //           </li>
// //         </ul>

// //         <hr />

// //         <Routes>
// //           <Route path="/" element={<Home />} />
// //           <Route path="/topics" element={<Topics />}>
// //             <Route path=":topicId" element={<Topic />}>
// //               <Route path=":resourceId" element={<Resource />} />
// //             </Route>
// //           </Route>
// //         </Routes>
// //       </div>
// //     </Router>
// //   );
// // }

