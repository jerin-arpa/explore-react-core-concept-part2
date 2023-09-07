export default function Friend({ friend }) {

    const boxStyle = {
        border: '2px solid tomato',
        padding: '5px',
        margin: '5px',
        borderRadius: '10px',
    }

    const { name, email } = friend;
    return (
        <div style={boxStyle}>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}