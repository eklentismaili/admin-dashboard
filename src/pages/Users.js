import { useEffect, useState, useMemo } from 'react';
import { usersColumns } from '../tableColumns/usersColumns';
import axios from 'axios';
import Table from '../components/table/Table';

function Users() {
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsersData();
  }, []);

  async function fetchUsersData() {
    const res = await axios.get(`https://reqres.in/api/users`);
    setUsersData(res.data.data);
    console.log(res);
    setLoading(false);
  }

  return (
    <div className="page">
      Users
      <Table columns={usersColumns} data={usersData} />
    </div>
  );
}

export default Users;
