import React from "react"

function App(){
    let data = [
        {name:"name", title:"title", salary:"salary"},
        ["name", "title", "salary"],
        ["John", "Developer", 5000],
        ["Jane", "app developer", 3000],
        ["Bob", "Developer", "1000"]
    ]
    return (
        <div>
            <table>
                {data.map((item)=>{
                    return <tr>{item.map((itemm)=>{
                        return <td>{itemm}</td>
                    })
                }</tr>
                })}
            </table>
        </div>
    )
}
export default App