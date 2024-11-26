function Hud() {
  const startup = ["CPU", "GPU", "RAM", "ROM", "Date"];
  return (
    <div className="full-container">
      <div className="data-box-container">
        <div className="control-container">
          <span className="seq-pad__cnr cnr--tp-lt"></span>
          <span className="seq-pad__cnr cnr--tp-rt"></span>
          <span className="seq-pad__cnr cnr--bt-lt"></span>
          <span className="seq-pad__cnr cnr--bt-rt"></span>
          <span className="title">Nesting Doll Tech Hud</span>
          <h3 className="typing">Scanning database</h3>
          <div className="data-box">
            Run
            <br />
            <span>CPU</span>
          </div>
          <div className="data-box">
            DB
            <br />
            <span>GPU</span>
          </div>
          <div className="data-box">
            Tst
            <br />
            <span>RAM</span>
          </div>
          <div className="data-box">
            Str
            <br />
            <span>NET</span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Hud;
