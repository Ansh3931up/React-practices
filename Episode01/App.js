


const parent=React.createElement("div",
    {id:"parent"},
    React.createElement("div",
        {id:"child"},
        React.createElement("h1",
            {},
            "I'm an h1 tag"
        )    
    )
)
const parent2=React.createElement("div",
    {id:"heading"},
    [React.createElement("h1",{},[React.createElement("h1",{},"I'm an h1 tag"),React.createElement("h2",{},"I'm an h2 tag")]),
    React.createElement("h1",{},[React.createElement("h3",{},"I'm an h3 tag"),React.createElement("h4",{},"I'm an h4 tag")]),
    React.createElement("h1",{},[React.createElement("h5",{},"I'm an h5 tag"),React.createElement("h6",{},"I'm an h6 tag")])
]
)
const heading=React.createElement("h1"//heading element
    ,{id:"heading",xys:"abc"},//attributes
    "Hello World with the react script")//child in props

console.log(parent);
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(parent2);