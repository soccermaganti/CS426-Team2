import LandingCard from '../components/landingCard';

const LandingPage: React.FC = () => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-cover bg-center bg-green-100 bg-fixed bg-no-repeat">
            <LandingCard />
        </div>
    );
};

export default LandingPage;
