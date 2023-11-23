#include<bits/stdc++.h>
using namespace std;

class a {
  public:
  string s;

  a() {
    s = "something";
  }
};

int main() {
  a *aa = new a();

  cout << aa->s << endl;

  delete aa;

  return 0;
}