import GroceryList from "./components/GroceryList";
import "./App.css"; // You can style your components in App.css

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "16px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <svg
              width="8"
              height="12"
              viewBox="0 0 8 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 12L0 6L6 0L7.4 1.4L2.8 6L7.4 10.6L6 12Z"
                fill="white"
              />
            </svg>
          </div>
          <div>
            <h3 className="list-title-text">Lists</h3>
          </div>
        </div>

        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5938 16.5938C11 16.1875 11.4688 15.9844 12 15.9844C12.5312 15.9844 13 16.1875 13.4062 16.5938C13.8125 17 14.0156 17.4688 14.0156 18C14.0156 18.5312 13.8125 19 13.4062 19.4062C13 19.8125 12.5312 20.0156 12 20.0156C11.4688 20.0156 11 19.8125 10.5938 19.4062C10.1875 19 9.98438 18.5312 9.98438 18C9.98438 17.4688 10.1875 17 10.5938 16.5938ZM10.5938 10.5938C11 10.1875 11.4688 9.98438 12 9.98438C12.5312 9.98438 13 10.1875 13.4062 10.5938C13.8125 11 14.0156 11.4688 14.0156 12C14.0156 12.5312 13.8125 13 13.4062 13.4062C13 13.8125 12.5312 14.0156 12 14.0156C11.4688 14.0156 11 13.8125 10.5938 13.4062C10.1875 13 9.98438 12.5312 9.98438 12C9.98438 11.4688 10.1875 11 10.5938 10.5938ZM13.4062 7.40625C13 7.8125 12.5312 8.01562 12 8.01562C11.4688 8.01562 11 7.8125 10.5938 7.40625C10.1875 7 9.98438 6.53125 9.98438 6C9.98438 5.46875 10.1875 5 10.5938 4.59375C11 4.1875 11.4688 3.98438 12 3.98438C12.5312 3.98438 13 4.1875 13.4062 4.59375C13.8125 5 14.0156 5.46875 14.0156 6C14.0156 6.53125 13.8125 7 13.4062 7.40625Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
      <GroceryList />
    </div>
  );
}

export default App;
