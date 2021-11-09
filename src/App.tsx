import { useState } from "react";
import ScrollToBottom from "./ScrollToBottom";

function App() {
  const [list, setList] = useState([
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab architecto distinctio praesentium porro eius quaerat ex unde aperiam quibusdam recusandae, labore in minima fugiat dignissimos cupiditate fugit laboriosam, facere doloribus!",
  ]);

  function makeid(length: number) {
    var result = "";
    var characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  const handleClick = () => {
    setList([...list, makeid(10)]);
  };

  return (
    <div style={{ display: "flex", gap: 20, maxWidth: 800, margin: "auto" }}>
      <ScrollToBottom height={300} style={{ marginTop: 50 }}>
        {list.map((item) => (
          <p>{item}</p>
        ))}
      </ScrollToBottom>
      <div>
        <button onClick={handleClick}>add</button>
      </div>
    </div>
  );
}

export default App;
