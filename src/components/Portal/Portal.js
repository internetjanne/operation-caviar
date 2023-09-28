import { Component } from 'react'
import ReactDOM from 'react-dom'

const portalRoot = typeof document !== `undefined` ? document.getElementById('modal-portal') : null

export default class Portal extends Component {
	constructor() {
		super()
		this.el = typeof document !== `undefined` ? document.createElement('div') : null
	}

	componentDidMount() {
		portalRoot.appendChild(this.el)
	}

	componentWillUnmount() {
		portalRoot.removeChild(this.el)
	}

	render() {
		const { children } = this.props

		if (this.el) {
			return ReactDOM.createPortal(children, this.el)
		} else {
			return null
		}

	}
}
/*
const Portal = ({ children }) => {
	const el = useMemo(() => typeof document !== `undefined` ? document.createElement('div') : null, [])
	useEffect(() => {
		const target = typeof document !== `undefined` ? document.getElementById('modal') : null
		target.appendChild(el)
		return () => {
			target.removeChild(el)
		}
	}, [el])
	return createPortal(children, el)
}

export default Portal */