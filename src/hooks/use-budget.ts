"use client";
import { useEffect, useState } from "react";
import { Budget, defaultBudget } from "@/lib/budget";
const KEY = "mizani-budget-v1";
export function useBudget() { const [budget,setBudget] = useState<Budget>(defaultBudget); const [loaded,setLoaded] = useState(false); useEffect(() => { try { const saved = localStorage.getItem(KEY); if(saved) { const parsed = JSON.parse(saved); setBudget({ ...defaultBudget, ...parsed, transport: { ...defaultBudget.transport, ...parsed.transport }, food: { ...defaultBudget.food, ...parsed.food } }); } } catch {} setLoaded(true); },[]); useEffect(() => { if(loaded) localStorage.setItem(KEY, JSON.stringify(budget)); },[budget,loaded]); return { budget, setBudget, loaded }; }
