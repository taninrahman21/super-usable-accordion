import Frontend from './Frontend/Frontend';
import Styles from './Styles/Styles';
import './style.scss';
import { createRoot } from 'react-dom/client';
// Block Name
function FrontEnd({ attributes }) {
	const { cId } = attributes;
	return (
		<>
			<Styles attributes={attributes} />
			<div id={`main-wrapper-${cId}`}>
				<Frontend attributes={attributes} />
			</div>
		</>
	);
}

const container = document.querySelectorAll('.wp-block-sua-hello');
container?.forEach(ele => {
	const attributes = JSON.parse(ele.dataset.attributes);
	const root = createRoot(ele);
	root.render(<FrontEnd attributes={attributes} />);
})