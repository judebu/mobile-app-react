import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

import {Link} from 'expo-router'
import { icons } from '@/constants/icons';

const MovieCard = ({id, poster_path, title, vote_average,
    release_date, overview} : Movie) => {
        console.log(poster_path);
  return (
    <Link href={`/movies/${id}`} asChild>
        <TouchableOpacity className="w-[30%] ">
            <Image
                 source={{ 
                    uri: poster_path 
                        ? `https://image.tmdb.org/t/p/w500${poster_path}`

                        : 'https://placehold.co/600x400/1a1a1a/ffffff.png'
                }}
                className="w-full h-52 rounded-lg"
                resizeMode="cover"
            />

            <Text className="text-sm font-bold
            text-white mt-2" numberOfLines={1}>{title}</Text>
            <View className="flex-row items-center justify-start gap-x-1">
                {Array.from({ length: Math.round(vote_average / 2) }).map((_, idx) => (
                    <Image key={idx} source={icons.star} className="size-4" />
                ))}
                <Text className="text-xs text-white font-bold uppercase ml-1"></Text>
                <Text className="text-xs text-light-300 font-medium mt-1 ml-auto">
                    {release_date ? release_date.split('-')[0] : ''}
                </Text>
            </View>
            <View className="flex-row items-center justify-between>">
                
                <Text className="text-xs text-light-300 font-medium ml-1 mt-1" numberOfLines={1}>
                    {overview ? overview.slice(0, 30) + '...' : 'No description'}
                </Text>

            </View>
        </TouchableOpacity>
    </Link>
  )
}

export default MovieCard