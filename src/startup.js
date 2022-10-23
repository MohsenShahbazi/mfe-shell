import { mount as remote1Mount } from 'remote1/RemoteApp1';
import { mount as remote2Mount } from 'remote2/RemoteApp2';

remote1Mount(document.querySelector('#remote1-app'));
remote2Mount(document.querySelector('#remote2-app'));
