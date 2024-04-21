import UserList from './UserList';
import useUserData from '../hooks/useUserData';

const UsersContainer = () => {

    const { isLoading, error, data } = useUserData();

    const props = {
        isLoading,
        error,
        data
    }

    return (
        <div>
            <UserList {...props}/>
        </div>
    );
};

export default UsersContainer;