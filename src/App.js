import DefaultLayout from './components/layouts/Default';
import Routes from './routes';

function App() {
  return (
    <DefaultLayout>
      <Routes />
      <h2>Title</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi corrupti corporis animi excepturi atque, maiores aliquid, ex dolores quo sit expedita harum ipsa illo a dolor quidem, asperiores dignissimos assumenda!</p>
    </DefaultLayout>
  );
}

export default App;
