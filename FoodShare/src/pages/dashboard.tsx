import UserDashboard from '../components/UserDashboard'

const DashBoard: React.FC = () => {
    return (
        <div>
            <section className="bg-gray-100 rounded-lg shadow-md p-6 sticky top-6">
            {/* <section> */}
                <UserDashboard />
            </section>
        </div>
    )
}
export default DashBoard