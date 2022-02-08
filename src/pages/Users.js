import { useEffect, useState, useMemo } from 'react';
import { usersColumns } from '../tableColumns/usersColumns';
import axios from 'axios';
import Table from '../components/table/Table';
import Breadcrumb from '../components/breadcrumb/Breadcrumb';

function Users() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsersData();
  }, []);

  async function fetchUsersData() {
    const res = await axios.get(`https://reqres.in/api/users`);
    setUsersData(res.data.data);
    setLoading(false);
  }

  return (
    <div className="page">
      <Breadcrumb title={'Users'} />
      <Table columns={usersColumns} data={usersData} />
    </div>
  );
}

export default Users;
