import Button from "react-bootstrap/Button";

function Jumbotron() {
	return (
		<div className="jumbotron">
			<h4 className="jumbotron-display mb-3">Sonnet Integrated Farm</h4>
			<p className="jumbotron-lead">
				Sonnet Farm is a newly built integrated farm located in{" "}
				<a
					href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.google.com%2Fmaps%2Fdir%2F%3Fapi%3D1%26destination%3D16.4429%252C120.49437%26fbclid%3DIwAR2zLCG1M_WPWsYAjK49vc1toPdNoDn6irKs5udHu4ilZXAk9vC1MJWCD9k&h=AT0XFZw6TNDxOE05slnWd6JMpgqcBunU2V3wq1C6nSaFVlj8iwbI940655TJDebfUSDLB9AlNj8jkONJFy8biI9fG4flmnreqXfzsJ64i-LyR9dQTt0_QwDWoyKgTIRY3HZWyQ"
					class="link-info"
				>
					Amocao, Bayabas 2614 Sablan, Philippines
				</a>
				.
				<hr className="my-4" />
				<span className="jumbotron-span">
					For more information please visit:
				</span>
			</p>
			<Button
				variant="outline-primary"
				className="d-flex align-items-center"
				onClick={() => {
					location.href =
						"https://www.facebook.com/Sonnet-Integrated-Farm-SIF-106787304398203";
				}}
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="16"
					height="16"
					fill="currentColor"
					className="bi bi-facebook me-2"
					viewBox="0 0 16 16"
				>
					<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
				</svg>
				Our Facebook Page
			</Button>
		</div>
	);
}

export default Jumbotron;
