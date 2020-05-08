import TopNav from '../TopNav';

const MyLayout = ({ children }) => (
  <>
    <TopNav />
    {children}
  </>
);

export default MyLayout;