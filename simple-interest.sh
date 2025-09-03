#!/bin/bash
# Script to calculate Simple Interest

# Simple Interest formula: (P * R * T) / 100
# P = Principal, R = Rate of Interest, T = Time (in years)

echo "Enter Principal Amount:"
read P

echo "Enter Rate of Interest:"
read R

echo "Enter Time (in years):"
read T

SI=$(( (P * R * T) / 100 ))

echo "Simple Interest = $SI"
