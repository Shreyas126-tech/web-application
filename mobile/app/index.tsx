import { Redirect } from 'expo-router';
import { useAuthStore } from '../store/useAuthStore';

export default function Index() {
    const { user } = useAuthStore();

    if (!user) {
        return <Redirect href="/(auth)/login" />;
    }

    return <Redirect href="/(tabs)" />;
}
