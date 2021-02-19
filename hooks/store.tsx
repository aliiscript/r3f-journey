import create from 'zustand'
import {State} from 'zustand'
import * as THREE from 'three'
import { Mesh } from 'three'
import { ReactNode } from 'react'

interface LinkState extends State{
  radius: number,
  boxSize: number,
  spheres: ReactNode[]
  boxes: ReactNode[]
  numSpheres: number
  numBoxes: number
  spheresCopy: ReactNode[]
  boxesCopy: ReactNode[]
  createSphere: (sphere : ReactNode) => void
  deleteSphere: () => void
  increaseNumSpheres: () => void
  decreaseNumSpheres: () => void
  createBox: (sphere : ReactNode) => void
  deleteBox: () => void
  increaseNumBoxes: () => void
  decreaseNumBoxes: () => void
  setRadius: () => void
  setBoxSize: () => void
  setSpheresCopy: () => void
  setBoxesCopy: () => void
}


const useStore = create<LinkState>((set, get) => ({
  radius: Math.random() * .5,
  boxSize: 1,
  spheres: [],
  boxes: [],
  numSpheres: 0,
  numBoxes: 0,
  spheresCopy: [],
  boxesCopy: [],
  //Sphere Create/Delete Functions
  createSphere: (sphere) => set(state => ({spheres: [...state.spheres, sphere]})),
  deleteSphere: () => set(state => ({spheres: state.spheresCopy})), 
  increaseNumSpheres: () => set(state => ({numSpheres: state.numSpheres + 1})),
  decreaseNumSpheres: () => set(state => ({numSpheres: state.numSpheres - 1})),
  //Box Create/Delete Functions
  createBox: (sphere) => set(state => ({spheres: [...state.spheres, sphere]})),
  deleteBox: () => set(state => ({spheres: state.spheresCopy})), 
  increaseNumBoxes: () => set(state => ({numBoxes: state.numBoxes + 1})),
  decreaseNumBoxes: () => set(state => ({numBoxes: state.numBoxes - 1})),
  setRadius: () => set({radius: Math.random() * .5}),
  setBoxSize: () => set({boxSize: Math.random() * .5}),
  setSpheresCopy: () => set(state => ({spheresCopy: state.spheres.splice(0, state.spheres.length-1)})),
  setBoxesCopy: () => set(state => ({boxesCopy: state.boxes.splice(0, state.boxes.length-1)}))
}))

export default useStore