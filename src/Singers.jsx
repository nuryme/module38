export default function Singers({name, age}) {
    return <div style={{
        border: '1px solid green',
        borderRadius: '20px',
        padding: '10px',
        margin: '10px'
    }}>
        <li>Singer: {name}</li>
        <li>Age: {age} </li>
    </div>
}