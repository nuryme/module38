//conditional rendering option 1:
// export default function Todo({task, isDone}) {
//     if(isDone) {
//         return (
//             <div className="container">
//             <h2>Exported from another jsx file</h2>
//             <ul style={{
//                 textAlign: 'left'
//             }}>
//                 <li>Task: {task}. (<span style={{
//                     color: 'green',
//                     fontWeight: 'bold'
//                 }}>Done</span>)</li>
//             </ul>
//         </div>
//         )
//     }
//     else {
//         return (
//             <div className="container">
//             <h2>Exported from another jsx file</h2>
//             <ul style={{
//                 textAlign: 'left'
//             }}>
//                 <li>Task: {task}. (<span style={{
//                     color: 'red',
//                     fontWeight: 'bold'
//                 }}>Get is done</span>)</li>
//             </ul>
//         </div>
//         )
//     }
// }


//conditional rendering option 2:
// export default function Todo({task, isDone}) {
//     if(isDone) {
//         return (
//             <div className="container">
//             <h2>Exported from another jsx file</h2>
//             <ul style={{
//                 textAlign: 'left'
//             }}>
//                 <li>Task: {task}. (<span style={{
//                     color: 'green',
//                     fontWeight: 'bold'
//                 }}>Done</span>)</li>
//             </ul>
//         </div>
//         )
//     }
//     return (
//         <div className="container">
//         <h2>Exported from another jsx file</h2>
//         <ul style={{
//             textAlign: 'left'
//         }}>
//             <li>Task: {task}. (<span style={{
//                 color: 'red',
//                 fontWeight: 'bold'
//             }}>Get is done</span>)</li>
//         </ul>
//     </div>
//     )
// }

// conditional rendering option 3:
export default function Todo({task, isDone}) {
    return (
            <li>Task: {task}. {isDone ? <span style={{
                color: 'green',
                fontWeight: 'bold'
            }}>(Done)</span> : <span style={{
                color: 'red',
                fontWeight: 'bold'
            }}>(Get it done)</span>}</li>
    )
}


// conditional rendering option 4:
// export default function Todo({task, isDone}) {
//     return (
//         <div className="container">
//         <h2>Exported from another jsx file</h2>
//         <ul style={{
//             textAlign: 'left'
//         }}>
//             <li>Task: {task}. <span style={{
//                 color: 'green',
//                 fontWeight: 'bold'
//             }}>{isDone && '(Done)' || "(Get it done)"}</span></li>
//         </ul>
//         </div>

//     )
// }


//conditional rendering option 5:
// export default function Todo({task, isDone}) {
//     let listItem;
//     if(isDone) {
//                 listItem = <li>Task: {task}. <span style={{
//                 color: 'green',
//                 fontWeight: 'bold'
//             }}>(done)</span></li>
//     }
//     else {
//             listItem = <li>Task: {task}. <span style={{
//                 color: 'red',
//                 fontWeight: 'bold'
//             }}>(Get it done)</span></li>

//     }
//     return listItem
// }
