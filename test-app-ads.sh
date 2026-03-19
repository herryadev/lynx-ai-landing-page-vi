#!/bin/bash

# Test script to verify app-ads.txt accessibility
# Usage: ./test-app-ads.sh [domain]

DOMAIN=${1:-"localhost:3000"}

echo "Testing app-ads.txt for domain: $DOMAIN"
echo "=================================="

# Test 1: curl command
echo "1. Testing with curl:"
curl -s -w "Status: %{http_code}\n" "http://$DOMAIN/app-ads.txt"
echo ""

# Test 2: Check if content matches expected
echo "2. Verifying content:"
EXPECTED="google.com, pub-5782793016886468, DIRECT, f08c47fec0942fa0"
ACTUAL=$(curl -s "http://$DOMAIN/app-ads.txt" | tr -d '\r\n')

if [ "$ACTUAL" = "$EXPECTED" ]; then
    echo "✅ Content matches expected"
else
    echo "❌ Content mismatch"
    echo "Expected: $EXPECTED"
    echo "Actual:   $ACTUAL"
fi

echo ""

# Test 3: Check response headers
echo "3. Response headers:"
curl -s -I "http://$DOMAIN/app-ads.txt" | head -5

echo ""
echo "=================================="
echo "Test completed."
