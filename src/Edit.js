import { useEffect, useState } from 'react';
import { __ } from '@wordpress/i18n';
import Backend from './Backend/Backend';
import Settings from './Settings/Settings';
import Styles from './Styles/Styles';


const Edit = props => {
	const { className, setAttributes, clientId, attributes } = props;
	const { cId } = attributes;
	useEffect(() => { clientId && setAttributes({ cId: clientId.substring(0, 10) }); }, [clientId]); // Set & Update clientId to cId


	
	return <>
		<Styles attributes={attributes} />

		<Settings attributes={attributes} setAttributes={setAttributes} />

		<div className={className} id={`main-wrapper-${cId}`}>
			<Backend attributes={attributes} setAttributes={setAttributes} />
		</div>
	</>
};
export default Edit;