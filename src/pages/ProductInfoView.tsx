import { useParams } from "react-router-dom"
import { SingleFoodAPI } from "../API/FoodAPI"
import { ProductInfo } from "../components/ProductInfo"

export const ProductInfoView = () => {
	// const matID = "65fd97b729f983c33c7eca9e"
	const { mealId } = useParams()
	const id = mealId ?? "" // Om mealId är tomt - navigera till error-page? Just nu blir de tom sträng.
	const singleCourse = SingleFoodAPI(id)

	return (
		<>
			<div
				className="d-flex justify-content-center align-items-center divHeader shadow-sm my-3"
				style={{ fontFamily: "Arial, sans-serif", height: "100px" }}>
				<h1
					className="text-center"
					style={{ marginBottom: "0px" }}>
					Product Info
				</h1>
			</div>
			<ProductInfo
				id={singleCourse?._id}
				productType={singleCourse?.categories[0]}
				title={singleCourse?.title}
				imgSrc={singleCourse?.imageUrl}
				ingredients={singleCourse.ingredients}
				information={singleCourse?.description}
				price={singleCourse?.price}
				navigationPath="/sideselect"
			/>
		</>
	)
}
