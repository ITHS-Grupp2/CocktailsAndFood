import { Container } from "react-bootstrap"
import Placeholder from "react-bootstrap/Placeholder"
export const Footer = () => {
	return (
		<div className="w-100 d-flex justify-content-between">
			<div>
				<Placeholder
					xs={12}
					bg="primary">
					Text
				</Placeholder>
				<Placeholder
					xs={12}
					bg="danger">
					Text
				</Placeholder>
				<Placeholder
					xs={12}
					bg="success">
					Text
				</Placeholder>
			</div>
			<div>
				<Placeholder
					xs={12}
					bg="success">
					<h1>Footer</h1>
				</Placeholder>
			</div>
			<div>
				<Placeholder
					xs={12}
					size="lg"
					bg="danger">
					FB
				</Placeholder>
				<Placeholder
					xs={12}
					size="lg"
					bg="danger">
					IG
				</Placeholder>
			</div>
		</div>
	)
}
