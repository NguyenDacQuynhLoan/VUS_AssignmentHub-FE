// import DocViewer, { DocViewerRenderers } from '@cyntler/react-doc-viewer';
// import { Box, Typography } from '@mui/material';
// import { useEffect } from 'react';
// const mammoth = require("mammoth/mammoth.browser");

// export const DemoFileViewer = () => {
//   const filePath1 = process.env.PUBLIC_URL + '/sample_word.html';
//   const filePath2 = process.env.PUBLIC_URL + '/sample_excel.html';
//   const docs = [
//     {
//       uri: filePath1,
//     },
//     {
//       uri: filePath2,
//     },
//   ]

//   // demo convert word to html --> ERROR
//   useEffect(() => {
//     const demoConverter = () => {
//       mammoth.convertToHtml({ path: process.env.PUBLIC_URL + '/test_word.docx' })
//         .then(function (result) {
//           var html = result.value; // The generated HTML
//           docs.push({
//             uri: html
//           })
//         })
//         .catch(function (error) {
//           console.error("this is error " + error);
//         });
//     }
//     demoConverter();
//   }, [])

//   return (
//     <Box height={"64vh"}>
//       <Typography paddingLeft={2} fontSize={22}>Assignment Submitment</Typography>
//       <DocViewer
//         prefetchMethod='GET'
//         documents={docs}
//         pluginRenderers={DocViewerRenderers}
//         style={{
//           height: "80vh"
//         }}
//       />
//     </Box>
//   )
// }