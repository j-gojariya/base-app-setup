import CardList from '../components/CardList';
import RecentSupplyOrdersTable from '../components/RecentSupplyOrdersTable';
import '../dashboard.less';

function Dashboard() {
  return (
    <>
      <div className="idea overflowX-hidden pt-0 plr-0">
        <CardList />
      </div>
      <div className="background-white">
        <RecentSupplyOrdersTable />
      </div>
    </>
  );
}

export default Dashboard;
