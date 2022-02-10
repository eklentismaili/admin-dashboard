import Layout from '../components/layout/Layout';
import AuthProvider from '../providers/Auth';

export default function App() {
  return (
    <AuthProvider>
      <div className="app">
        <Layout />
      </div>
    </AuthProvider>
  );
}
