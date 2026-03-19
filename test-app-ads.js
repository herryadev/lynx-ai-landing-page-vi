// Test script to verify app-ads.txt accessibility with fetch
// Usage: node test-app-ads.js [domain]

const domain = process.argv[2] || 'localhost:3000';
const url = `http://${domain}/app-ads.txt`;

async function testAppAdsTxt() {
  console.log(`Testing app-ads.txt for domain: ${domain}`);
  console.log('==================================');
  
  try {
    // Test 1: Basic fetch
    console.log('1. Testing with fetch:');
    const response = await fetch(url);
    
    console.log(`Status: ${response.status}`);
    console.log(`Content-Type: ${response.headers.get('content-type')}`);
    
    const content = await response.text();
    console.log(`Content: ${content}`);
    console.log('');
    
    // Test 2: Verify content
    console.log('2. Verifying content:');
    const expected = 'google.com, pub-5782793016886468, DIRECT, f08c47fec0942fa0';
    const actual = content.trim();
    
    if (actual === expected) {
      console.log('✅ Content matches expected');
    } else {
      console.log('❌ Content mismatch');
      console.log(`Expected: ${expected}`);
      console.log(`Actual:   ${actual}`);
    }
    
    console.log('');
    
    // Test 3: Check response headers
    console.log('3. Response headers:');
    response.headers.forEach((value, key) => {
      console.log(`${key}: ${value}`);
    });
    
  } catch (error) {
    console.error('❌ Error:', error.message);
  }
  
  console.log('');
  console.log('==================================');
  console.log('Test completed.');
}

testAppAdsTxt();
