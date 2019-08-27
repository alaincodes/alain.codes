import React from "react"
import { useSpring, animated } from "react-spring"

class TranslateAbout extends React.Component {
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
        <h1 className="about-h1">About</h1>
        <p className="about-p">
          Je développe des applications{" "}
          <span className="about-highlight">Web et Mobile</span> avec{" "}
          <span className="about-highlight">React & Express</span>. Je travaille
          avec beaucoup d'appétit, d'honnêté et d'engagement. J'attache beaucoup
          d'importance aux <span className="about-highlight">design UI/UX</span>
          , à l'
          <span className="about-highlight">Accessibilité</span> et aux{" "}
          <span className="about-highlight">Performances</span>.
        </p>
        <p className="about-p">
          Anciennement cuisinier à Paris, quand je ne code pas, vous me
          trouverez certainement entrain de regarder ou de lire des
          livres/vidéos de cuisine ou simplement derrière les fourneaux !
        </p>
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
        <h1 className="about-h1">About</h1>
        <p className="about-p">
          I code for <span className="about-highlight">Web & Mobile</span>{" "}
          devices using <span className="about-highlight">React & Express</span>
          . I work with a lot of appetite, honesty and commitment. I also like
          to create{" "}
          <span className="about-highlight">
            beautifully fast websites/apps
          </span>{" "}
          and follow
          <span className="about-highlight"> Accessibility</span> guidelines.
        </p>
        <p className="about-p">
          Outside of programming, you will probably see me reading, watching
          cooking stuff or in front of the stove, I was working as a cook in
          Paris years ago !!
        </p>
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
      Français
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

export default TranslateAbout
