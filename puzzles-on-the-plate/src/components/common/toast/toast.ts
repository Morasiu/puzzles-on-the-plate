import {ref} from "vue";

const isToastActive = ref(false);
const messageRef = ref("Hello Toast");
const timeoutRef = ref(3000);

export function useToast() {
    const toast = (message: string, timeout: number = 3000) => {
        messageRef.value = message;
        timeoutRef.value = timeout;
        isToastActive.value = true;
    }

    return {
        toast,
        isToastActive,
        messageRef,
        timeoutRef
    }
}