import useAuth from "../../hooks/useAuth";
import image from "../../assets/user.png"

const Profile = () => {
  const { loading, currentUser } = useAuth();
  return (
    // <section className="min-h-[60vh] container mx-auto grid place-items-center">
    //   <h2 className="text-3xl font-bold">Profile Page</h2>
    // </section>
      <div className="min-h-[80vh] container mx-auto grid place-items-center">
        {loading ? (
          <span className="loading loading-spinner text-warning loading-lg"></span>
        ) : (
          <div className="w-1/2 bg-white shadow-lg border border-gray-100 p-5 rounded-lg">
            <h2 className="text-3xl font-bold text-center my-5">Profile Page</h2>
            <img
              className="mx-auto w-32 h-32 rounded-full mb-5 object-cover"
              src={currentUser.photoURL ? currentUser.photoURL : image}
              alt={currentUser.displayName}
            />
            <div className="text-center">
              <h2 className="text-xl font-semibold">
                Name: {currentUser.displayName}
              </h2>
              <p className="text-gray-400">Email: {currentUser.email}</p>
            </div>
          </div>
        )}
      </div>
  );
};

export default Profile;
