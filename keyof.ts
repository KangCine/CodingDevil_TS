// keyof

interface User{
    id: number;
    name: string;
    age: number;
    gender: "m" | "f";
}

// interface User{
//     id?: number;
//     name?: string;
//     age?: number;
//     gender?: "m" | "f";
// }

let admin: Partial<User> = {
    id: 1,
    name: "Bob",
}

// Partial로 감싸게 되면 오브젝트의 모든 Key에 ?가 붙음

// Required로 감싸게 되면 오브젝트의 모든 Key가 ? 가 없는 필수요소가 됨

// Record<K, T>