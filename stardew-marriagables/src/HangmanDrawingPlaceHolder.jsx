const HEAD = (
  <div
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "100%",
      border: "10px solid black",
      position: "absolute",
      top: "50px",
      right: "15px",
    }}
  />
)

const BODY = (
  <div
    style={{
      width: "10px",
      height: "100px",
      background: "black",
      position: "absolute",
      top: "120px",
      right: "45px",
    }}
  />
)

const RIGHT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "-55px",
      rotate: "-30deg",
      transformOrigin: "left bottom",
    }}
  />
)

const LEFT_ARM = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "150px",
      right: "55px",
      rotate: "30deg",
      transformOrigin: "right bottom",
    }}
  />
)

const RIGHT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "-45px",
      rotate: "60deg",
      transformOrigin: "left bottom",
    }}
  />
)

const LEFT_LEG = (
  <div
    style={{
      width: "100px",
      height: "10px",
      background: "black",
      position: "absolute",
      top: "210px",
      right: "45px",
      rotate: "-60deg",
      transformOrigin: "right bottom",
    }}
  />
)

const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]


 function HangmanDrawingPlaceHolder(props) {
  const numberOfGuesses = props.numGuesses;

    return (
      <div className="hangman">
        <div style={{ position: "relative"
        }}>
          {BODY_PARTS.slice(0, numberOfGuesses)}
          <div
            style={{
              height: "50px",
              width: "10px",
              background: "black",
              position: "absolute",
              top: 0,
              right: 45,
            }}
          />
          <div
            style={{
              height: "10px",
              width: "155px",
              background: "black",
              marginLeft: "75px",
            }}
          />
          <div
            style={{
              height: "400px",
              width: "10px",
              background: "black",
              marginLeft: "75px",
            }}
          />
          <div style={{  height: "10px", width: "250px", background: "black" }} />
        </div>
      </div>
    )
}
export default HangmanDrawingPlaceHolder