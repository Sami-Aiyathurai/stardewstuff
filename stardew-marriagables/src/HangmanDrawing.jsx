const HEAD = (
    <div
      style={{
        width: "50px",
        height: "50px",
        borderRadius: "100%",
        border: "10px solid black",
        position: "absolute",
        top: "50px",
        right: "20px",
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
        right: "50px",
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
        right: "-50px",
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
        right: "60px",
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
        right: "-40px",
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
        right: "50px",
        rotate: "-60deg",
        transformOrigin: "right bottom",
      }}
    />
  )
  
  const BODY_PARTS = [HEAD, BODY, RIGHT_ARM, LEFT_ARM, RIGHT_LEG, LEFT_LEG]
  const numberOfGuesses = 6
  
 function HangmanDrawing() {
    return (
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
            right: 50,
          }}
        />
        <div
          style={{
            height: "10px",
            width: "150px",
            background: "black",
            marginLeft: "70px",
          }}
        />
        <div
          style={{
            height: "400px",
            width: "10px",
            background: "black",
            marginLeft: "70px",
          }}
        />
        <div style={{ height: "10px", width: "200px", background: "black" }} />
      </div>
    )
}

export default HangmanDrawing