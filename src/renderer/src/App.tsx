const App = () => {
  return (
    <div>
      <h1>hello electron</h1>
      <button
        onClick={() => {
          const a = (window as any).api.test();
          console.log(a);
        }}
      >
        버튼
      </button>
    </div>
  );
};

export default App;
