import '../styles/main.scss';

import ReactDOM from 'react-dom';
import Dapp from './react/Dapp';
import Test from './react/test'
import CollectionConfig from '../../../smart-contract/config/CollectionConfig';

if (document.title === '') {
  document.title = CollectionConfig.tokenName;
}

document.addEventListener('DOMContentLoaded', async () => {
  ReactDOM.render(<Test />, document.getElementById('minting-dapp'));
});
