import { useEffect, useState } from 'react';
import axios from 'axios';
import { SectionPage } from './style';
import { URLModal } from './style';
import PageTitle from '../../components/UI/PageTitle';
import Back from '../../components/UI/Back';
import UrlInput from '../../components/UrlShortener/UrlInput/UrlInput';
import UrlList from '../../components/UrlShortener/UrlList/UrlList';
import { Url } from '../../types/types';

const UrlShortener = () => {
	const [urls, setUrls] = useState<Url[] | null>(null);
	const [modalText, setModalText] = useState('');
	const [openModal, setOpenModal] = useState(false);

	const toggleModal = () => {
		setOpenModal((prevState) => !prevState);
	};

	const getURLForModal = (url: string) => {
		setModalText(url);
	};

	const getUrls = async () => {
		try {
			const res = await axios.get(
				'https://fullstack-demos.herokuapp.com/shorten/urls/all'
			);
			setUrls(res.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getUrls();
	}, []);

	return (
		<SectionPage>
			{openModal && (
				<URLModal>
					<h2>Your URL:</h2>
					<p>
						<a href={modalText}>{modalText}</a>
					</p>
					<button onClick={toggleModal}>Close</button>
				</URLModal>
			)}
			<Back href='/'>Go Back</Back>
			<PageTitle>URL Shortener</PageTitle>
			<UrlInput
				getUrls={getUrls}
				toggleModal={toggleModal}
				getURLForModal={getURLForModal}
			/>
			<UrlList urls={urls} />
		</SectionPage>
	);
};

export default UrlShortener;
