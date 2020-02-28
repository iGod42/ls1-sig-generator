export default async function toDataURL(src: string, outputFormat?: "image/jpg" | "image/png"): Promise<string> {
	return new Promise<string>((resolve) => {
		var img: HTMLImageElement = new Image()
		img.crossOrigin = "Anonymous"
		img.onload = function () {
			const canvas: HTMLCanvasElement = document.createElement("CANVAS") as HTMLCanvasElement
			const ctx = canvas.getContext("2d")
			
			const imgElement = this as HTMLImageElement
			
			canvas.height = imgElement.naturalHeight
			canvas.width = imgElement.naturalWidth
			ctx?.drawImage(imgElement, 0, 0)
			resolve(canvas.toDataURL(outputFormat))
		}
		
		img.src = src
		if (img.complete || img.complete === undefined) {
			img.src = src
		}
	})
}
