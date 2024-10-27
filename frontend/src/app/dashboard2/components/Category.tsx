'use client'

import { useEffect, useState } from "react";
import apiClient from '@/utils/apiClient';

// dotenv.config()
export default function CategoryLomba() {
    const [categories, setCategori] = useState([])

    useEffect(() => {
        try {
            const fetchCategories = async () => {
                const categori = await apiClient.get(`${process.env.NEXT_PUBLIC_BASEURL_BACKEND}/categories`);
                setCategori(categori.data.data)
            }
            fetchCategories();
        } catch (error) {
            console.log(error)
        }
    }, [])


    return categories.map((categori: any) => (
        <option value={categori.id}>{categori.categoriName}</option>
    ))
}