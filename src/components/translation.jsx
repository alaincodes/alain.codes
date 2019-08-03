import React from "react"
import { useSpring, animated } from "react-spring"

class Translation extends React.Component {
  constructor(props) {
    super(props)
    this.handleFrenchClick = this.handleFrenchClick.bind(this)
    this.handleEnglishClick = this.handleEnglishClick.bind(this)
    this.state = { isTranslated: false }
  }

  handleFrenchClick() {
    this.setState({ isTranslated: true })
  }

  handleEnglishClick() {
    this.setState({ isTranslated: false })
  }

  render() {
    const isTranslated = this.state.isTranslated
    let button

    if (isTranslated) {
      button = <EnglishButton onClick={this.handleEnglishClick} />
    } else {
      button = <FrenchButton onClick={this.handleFrenchClick} />
    }

    return (
      <div>
        <Translating isTranslated={isTranslated} />
        {button}
      </div>
    )
  }
}

function French(props) {
  const anim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 900 },
  })
  return (
    <div>
      <animated.div style={anim}>
        <h1 className="main-h1">
          Hello, Je suis Alain,{" "}
          <span className="main-highlight">Développeur Front-end Junior</span>.
          Je code des applications{" "}
          <span className="main-highlight">Web et Mobile</span> avec{" "}
          <span className="main-highlight">ReactJS</span>.
        </h1>
        <h2 className="main-h2">
          Je suis disponible pour completer votre équipe ou projet en freelance,
          n'hésitez pas à me contacter sur
          <span>
            {" "}
            <a
              className="main-highlight"
              href="https://twitter.com/alaincodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{" "}
          </span>{" "}
          ou par Email:
          <span className="main-highlight"> contact@alain.codes</span>
        </h2>
      </animated.div>
    </div>
  )
}

function English(props) {
  const anim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 900 },
  })
  return (
    <div>
      <animated.div style={anim}>
        <h1 className="main-h1">
          Hello, I'm Alain{" "}
          <span className="main-highlight">Junior Front-end Developer</span>. I
          like to code for{" "}
          <span className="main-highlight">Web and Mobile </span>
          devices using <span className="main-highlight">ReactJS</span>.
        </h1>
        <h2 className="main-h2">
          I'm available to complete your team and cool freelance/remote
          opportunities, hit me up on
          <span>
            {" "}
            <a
              className="main-highlight"
              href="https://twitter.com/alaincodes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>{" "}
          </span>{" "}
          or send me an Email:
          <span className="main-highlight"> contact@alain.codes</span> for
          future projects!
        </h2>
      </animated.div>
    </div>
  )
}

function Translating(props) {
  const isTranslated = props.isTranslated
  if (isTranslated) {
    return <French />
  }
  return <English />
}

function FrenchButton(props) {
  return (
    <button className="translateBtn" onClick={props.onClick}>
      French
    </button>
  )
}

function EnglishButton(props) {
  return (
    <button className="translateBtn" onClick={props.onClick}>
      English
    </button>
  )
}

export default Translation
