import UserDashboard from '../components/UserDashboard'
import BusinessDashboard from '../components/BusinessDashboard'

const DashBoard: React.FC = () => {
    return (
        <div>
            <section className="bg-black rounded-lg shadow-md p-6 sticky top-6">
            {/* <section> */}
                <UserDashboard />
            </section>
            <section className="bg-black rounded-lg shadow-md p-6 sticky top-6">
                <BusinessDashboard />
            </section>
        </div>
    )
}
export default DashBoard